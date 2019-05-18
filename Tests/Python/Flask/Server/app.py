from flask import Flask, render_template
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
localIp = (s.getsockname()[0])
s.close()

app = Flask(__name__, static_url_path='')




@app.route('/')
def index():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(host=localIp,debug=True)
