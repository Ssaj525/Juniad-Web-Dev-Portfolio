import glob
import re
import zlib
import json
import os

results = {}
files = sorted(glob.glob('ProjectDetails Images/*.pdf'))

for pdf_path in files:
    filename = os.path.basename(pdf_path)
    proj_id = filename.split()[0] # e.g. P1, P2, P3, P10
    
    with open(pdf_path, 'rb') as f:
        data = f.read()
    
    streams = re.findall(b'stream\r?\n(.*?)\r?\nendstream', data, re.DOTALL)
    text_chunks = []
    
    for s in streams:
        try:
            decomp = zlib.decompress(s).decode('latin1', errors='ignore')
            # Extract PDF strings
            strings = re.findall(r'\((.*?)\)', decomp)
            for st in strings:
                cleaned = st.replace('\\(', '(').replace('\\)', ')').replace('\\', '').strip()
                if len(cleaned) > 2 and not cleaned.startswith('/') and not 'WinAnsi' in cleaned:
                    text_chunks.append(cleaned)
        except Exception:
            pass
    
    # Also find corresponding image folder
    img_dir_pattern = f"ProjectDetails Images/{proj_id}*"
    matching_dirs = [d for d in glob.glob(img_dir_pattern) if os.path.isdir(d)]
    images = []
    if matching_dirs:
        img_folder = matching_dirs[0]
        images = [f"/{img_folder}/{os.path.basename(img)}" for img in glob.glob(f"{img_folder}/*") if img.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]

    results[proj_id] = {
        'pdf': filename,
        'folder': matching_dirs[0] if matching_dirs else '',
        'images': images,
        'raw_text_sample': text_chunks[:30]
    }

with open('src/data/extracted_data.json', 'w', encoding='utf-8') as out:
    json.dump(results, out, indent=2)

print(f"Successfully extracted {len(results)} projects!")
