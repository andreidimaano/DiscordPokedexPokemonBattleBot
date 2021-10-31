from flask import Flask, send_file, request
import numpy as np

import requests
from io import BytesIO


from PIL import Image, ImageDraw

app = Flask(__name__)

# runs on http://127.0.0.1:5000/ 

@app.route('/')
def index():
    return 'ur mom'

@app.route('/battleimg')
def get_img():
    bgIM = Image.open('../Assets/battlebg1.png')

    pokemon1 = request.args['pokemon1']
    pokemon2 = request.args['pokemon2']
    rem1 = request.args['rem1']
    rem2 = request.args['rem2']

    newIm = bgIM.copy()

    draw = ImageDraw.Draw(newIm)
    #top left HP BAR
    draw.rectangle((8, 18, 152, 32), fill="black")
    draw.rectangle((10, 20, 150 * (int(rem1) / 100), 30), fill="green")

    # bottom right HP BAR
    draw.rectangle((bgIM.size[0] - 152, bgIM.size[1] - 32, bgIM.size[0] - 18 , bgIM.size[1] - 18), fill="black")
    draw.rectangle((bgIM.size[0] - (150 * (int(rem2) / 100)), bgIM.size[1] - 30, bgIM.size[0] - 20 , bgIM.size[1] - 20), fill="green")

    # pokemon 1
    response = requests.get(f'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/{pokemon1}.png')
    img = Image.open(BytesIO(response.content))
    size = 350,350
    img = img.resize(size, Image.ANTIALIAS)
    img = img.convert("RGBA")
    print(img.size[0])
    newIm.paste(img, (-70, bgIM.size[1] - img.size[1] + 110), img)

    # pokemon 2
    response = requests.get(f'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemon2}.png')
    img = Image.open(BytesIO(response.content))
    size = 150,150
    img = img.resize(size, Image.ANTIALIAS)
    img = img.convert("RGBA")
    print(img.size[0])
    newIm.paste(img, (bgIM.size[0]  - img.size[0]- 20, img.size[1] - 110), img)
    
    newIm.save('newim.png')

    # pokemon1 = request.args.get('pokemon1')
    # pokemon2 = request.args.get('pokemon2')
    return send_file('newim.png', mimetype='image/png')
