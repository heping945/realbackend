FROM heping945/python36

MAINTAINER heping945
ENV PYTHONUNBUFFERED 1

WORKDIR /blog

# 复制Pipfile到容器
COPY Pipfile /blog/Pipfile
COPY Pipfile.lock /blog/Pipfile.lock

# 安装环境依赖
RUN pipenv install --system --deploy --ignore-pipfile
RUN pip install /src/xadmin-master.zip

# 复制项目文件到工作目录
COPY . /blog


COPY ./start.sh /start.sh
RUN sed -i 's/\r//' /start.sh
RUN chmod +x /start.sh