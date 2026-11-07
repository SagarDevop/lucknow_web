import urllib.request
import json
import urllib.parse
import os
import time

titles = [
    ('hdfc-bank', 'File:HDFC Bank Logo.svg'),
    ('icici-bank', 'File:ICICI Bank Logo.svg'),
    ('axis-bank', 'File:Axis Bank logo.svg'),
    ('tata', 'File:Tata logo.svg'),
    ('maruti-suzuki', 'File:Maruti Suzuki logo (2009).svg'),
    ('adani', 'File:Adani logo 2012.svg'),
    ('reliance-digital', 'File:Reliance Digital.svg'),
    ('pizza-hut', 'File:Pizza Hut (2019).svg'),
    ('kfc', 'File:KFC logo wordmark.svg'),
    ('nexa', 'File:Nexalogoweb.svg'),
]

title_map = {t[1]: t[0] for t in titles}
titles_query = '|'.join([urllib.parse.quote(t[1]) for t in titles])
url = f'https://commons.wikimedia.org/w/api.php?action=query&titles={titles_query}&prop=imageinfo&iiprop=url&format=json'

os.makedirs('public/images/logos', exist_ok=True)

headers = {
    'User-Agent': 'AmbientEngineersWeb/1.0 (https://ambientengineers.com; dev@ambientengineers.com)'
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        for page_id, page in data['query']['pages'].items():
            title = page.get('title')
            info = page.get('imageinfo')
            key = title_map.get(title)
            out_path = f'public/images/logos/{key}.svg'
            if os.path.exists(out_path) and os.path.getsize(out_path) > 500:
                print(f"Already downloaded {key}")
                continue
            if info and key:
                file_url = info[0]['url']
                print(f"Downloading {key} from {file_url}...")
                time.sleep(2)  # Respect rate limit
                file_req = urllib.request.Request(file_url, headers=headers)
                try:
                    with urllib.request.urlopen(file_req) as f_resp:
                        content = f_resp.read()
                        with open(out_path, 'wb') as out_f:
                            out_f.write(content)
                        print(f"Saved {out_path} ({len(content)} bytes)")
                except Exception as dl_err:
                    print(f"Failed downloading {key}: {dl_err}")
            else:
                print(f"Could not find info for {title}")
except Exception as e:
    print(f"Error: {e}")
