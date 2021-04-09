import requests

html = requests.get("https://httpbin.org/encoding/utf8")
print(html.text)