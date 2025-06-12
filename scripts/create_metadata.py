import os
import json

# Define the output directory: ../metadata relative to this script
output_dir = os.path.join(os.path.dirname(__file__), '../metadata')
os.makedirs(output_dir, exist_ok=True)  # Create the directory if it doesn't exist

# Base image URL for each NFT
base_image_url = 'ipfs://bafybeif3vilrapn3iym6wb64oyogaek2u7vchlsdo5o7qhwkv2l3nxgi3e/'

# Generate metadata for token IDs from 1001 to 1300
for token_id in range(1, 301):
    metadata = {
        "name": f"LoveRose Genesis God #{token_id:03}",
        "description": "The Genesis God of the LoveRose Universe—an exclusive digital identity credential co-issued by LoveRose (TR - Tactile Remote Reality & Live Interaction) and InNow. This prestigious token grants holders supreme membership status and exclusive privileges within the LoveRose Universe.",
        "image": f"{base_image_url}{token_id:03}.png",
        "external_url": "https://genesisgod.loverose.club/",
        #"animation_url":"",
        #"youtube_url":"",
        "background_color": "#000000",
        "attributes": [
          #{ "trait_type": "Frame", "value": "Gold Emboss" },
          #{ "trait_type": "Portrait", "value": "Actress A" },
          #{ "trait_type": "Accent", "value": "Crystal Inlay" },
          #{ "trait_type": "Rarity", "value": "Diamond" }
        ]
    }

    # Define the output file path for each JSON
    file_path = os.path.join(output_dir, f"{token_id}.json")
    
    # Write the metadata as pretty-printed JSON
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, ensure_ascii=False, indent=2)

print(f"✅ Metadata files generated in: {output_dir}")
