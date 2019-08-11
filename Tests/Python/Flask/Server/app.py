from flask import Flask, render_template, request, redirect, Response, jsonify
import sys, socket, random, json

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
localIp = (s.getsockname()[0])
s.close()

app = Flask(__name__, static_url_path='')


@app.route('/')
def index():
    return render_template('a.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/pacman')
def pacman():
    return render_template('index.html')

@app.route('/cookie')
def cookie():
    return render_template('cookie.html')

@app.route('/form')
def form():
    return render_template('formC.html')

# @app.route('/a')s
# def a():
#     return render_template('index.html', name="23a")


@app.route('/_add_numbers')
def add_numbers():
    a = request.args.get('a', 0, type=int)
    b = request.args.get('b', 0, type=int)
    if a == 1000:
        return jsonify(result="secret")
    else:
        return jsonify(result=a + b)


if __name__ == '__main__':
    app.run(host=localIp, debug=True)

