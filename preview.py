#!/usr/bin/env python3
"""VisaTaly statik dosyaları için basit önizleme sunucusu."""

from __future__ import annotations

import argparse
import contextlib
import http.server
import socket
import socketserver
import webbrowser
import os
import sys
from pathlib import Path


class SilentTCPServer(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="VisaTaly statik sayfalarını yerelde önizlemek için yardımcı sunucu"
    )
    parser.add_argument(
        "--port",
        type=int,
        default=8000,
        help="Sunucunun dinleyeceği port (varsayılan: 8000)",
    )
    parser.add_argument(
        "--no-browser",
        action="store_true",
        help="Sunucu başladıktan sonra tarayıcıyı otomatik açma",
    )
    return parser.parse_args()


def find_free_port(requested_port: int) -> int:
    if requested_port != 0:
        return requested_port

    with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
        sock.bind(("", 0))
        return sock.getsockname()[1]


def main() -> None:
    args = parse_args()
    port = find_free_port(args.port)

    root = Path(__file__).resolve().parent
    handler = http.server.SimpleHTTPRequestHandler

    old_cwd = Path.cwd()
    try:
        os.chdir(root)
        try:
            with SilentTCPServer(("", port), handler) as httpd:
                address = f"http://localhost:{port}"
                print(f"VisaTaly önizleme sunucusu {address} adresinde hazır.")
                print("Çıkmak için Ctrl+C kombinasyonunu kullanın.")

                if not args.no_browser:
                    webbrowser.open(address)

                try:
                    httpd.serve_forever()
                except KeyboardInterrupt:
                    print("\nSunucu kapatılıyor…")
        except OSError as exc:
            print(
                f"Port {port} kullanılamıyor. Başka bir port deneyin veya --port ile belirtin.\nHata: {exc}"
            )
            sys.exit(1)
    finally:
        os.chdir(old_cwd)


if __name__ == "__main__":
    main()
