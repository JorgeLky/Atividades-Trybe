import requests

headers = {
  'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Mobile Safari/537.36', 
  'cookie': '__cfduid=d29e84d7b00ab1ca70fde8f96af50a24c1616020117; _ga=GA1.2.630926909.1616020140; _gid=GA1.2.1081555058.1616020140; _fbp=fb.1.1616020146875.61912029',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
  'cache-control': 'max-age=0',
  'sec-ch-ua': '"Google Chrome";v="89", "Chromium";v="89", ";Not\"A\\Brand";v="99"',
  'sec-ch-ua-mobile': '?1'
  }

response = requests.get("https://scrapethissite.com/pages/advanced/?gotcha=headers", headers=headers)
assert "bot detected" not in response.text