from flask import Flask, send_file, request

import requests
from io import BytesIO

from PIL import Image, ImageDraw

# Install PIL, io, requests, flask

#1. Create a new flask app, use the documentation to get started

#2. Create a get route that creates a pokemon battle image

    #3. use Image to open the pokemon background asset 
    #   search: "how to edit images python"
    #   ref: https://automatetheboringstuff.com/chapter17/

    #4. get the arguments and assign them to variables
    #   search: "flask rest api parameters"
    #   ref: https://stackoverflow.com/questions/30779584/flask-restful-passing-parameters-to-get-request

    #5. draw HP bars on the image
    #   search: "pillow draw"
    #   ref: https://www.blog.pythonlibrary.org/2021/02/23/drawing-shapes-on-images-with-python-and-pillow/

    #6. get the first pokemon and paste it onto the image
    #   search: "resize image pillow"
    #   ref: https://stackoverflow.com/questions/273946/how-do-i-resize-an-image-using-pil-and-maintain-its-aspect-ratio
    #   search: "png background is black python"
    #   ref: https://stackoverflow.com/questions/57948254/transparet-pixels-are-being-pasted-as-black-in-pil

    #7. get the second pokemon and paste it onto the image
    #   use the same API to get images
    #   search: "make api call python"
    #   ref: https://www.nylas.com/blog/use-python-requests-module-rest-apis/

    #8 save the image

    #9. return the image