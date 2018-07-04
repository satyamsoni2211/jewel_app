import base64
from django.core.files.base import ContentFile
from django.utils.crypto import get_random_string


def getImage(string):
    format, imgstr = string.split(';base64,')
    print("format", format)
    ext = format.split('/')[-1]
    data = ContentFile(base64.b64decode(imgstr))
    file_name = '{}.{}'.format(get_random_string(length=20),ext)
    return (data,file_name)



