import os
import json

# Define the output directory: ../metadata relative to this script
output_dir = os.path.join(os.path.dirname(__file__), '../assets/metadata')
os.makedirs(output_dir, exist_ok=True)  # Create the directory if it doesn't exist

# Base image URL for each NFT
base_image_url = 'https://stg.rose.love/nft/'

# Generate metadata for token IDs from 1001 to 1300
for token_id in range(1001, 1301):
    metadata = {
        "name": f"Genesis God #{token_id}",
        "description": "LoveRose · Emotional Universe Genesis God NFT - Black Gold Card Supreme",
        "image": f"{base_image_url}nft.png",
        "external_url": "https://rose.love",
        "animation_url":"",
        "youtube_url":"",
        "background_color": "#",
        "attributes": [
          { "trait_type": "Frame", "value": "Gold Emboss" },
          { "trait_type": "Portrait", "value": "Actress A" },
          { "trait_type": "Accent", "value": "Crystal Inlay" },
          { "trait_type": "Rarity", "value": "Diamond" }
        ]
    }

    # Define the output file path for each JSON
    file_path = os.path.join(output_dir, f"{token_id}.json")
    
    # Write the metadata as pretty-printed JSON
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, ensure_ascii=False, indent=2)

print(f"✅ Metadata files generated in: {output_dir}")
