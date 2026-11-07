import urllib.request
import os

images = {
    'about-building.jpg': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    'tech-chillers.jpg': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
    'tech-ducting.jpg': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop',
    'tech-electrical.jpg': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    'tech-firefighting.jpg': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop',
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

os.makedirs('public/images/about', exist_ok=True)

for name, url in images.items():
    out_path = f'public/images/about/{name}'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            with open(out_path, 'wb') as f:
                f.write(data)
            print(f'Downloaded {name}: {len(data)} bytes')
    except Exception as e:
        print(f'Failed {name}: {e}')

