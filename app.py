# app.py
from flask import Flask, render_template, request
import requests
import anilistAPI

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    results = []
    if request.method == 'POST':
        query = request.form.get('query')
        mediaType = request.form.get('mediaType')
        results = anilistAPI.search_media(query, mediaType)
    return render_template('index.html', results=results)

if __name__ == '__main__':
    app.run(debug=True)