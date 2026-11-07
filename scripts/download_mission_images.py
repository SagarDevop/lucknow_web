import urllib.request
import os

images = {
    'mission-mep-ceiling.jpg': 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1000&auto=format&fit=crop',
    'vision-commercial-skyline.jpg': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
    'mission-exposed-ducts.jpg': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop',
    'vision-glass-towers.jpg': 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1000&auto=format&fit=crop',
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

os.makedirs('public/images/mission-vision', exist_ok=True)

for name, url in images.items():
    out_path = f'public/images/mission-vision/{name}'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            with open(out_path, 'wb') as f:
                f.write(data)
            print(f'Downloaded {name}: {len(data)} bytes')
    except Exception as e:
        print(f'Failed {name}: {e}')

