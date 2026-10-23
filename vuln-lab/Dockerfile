# INVICTI-TEST-52 Container misconfigurations: unpinned base, root user, a secret in ENV, remote ADD,
# an exposed debug port and no healthcheck. Never built.
FROM python:latest
ENV DB_PASSWORD=Summer2026!
ADD http://example.com/install.sh /tmp/install.sh
RUN chmod 777 /tmp/install.sh && /tmp/install.sh
COPY . /app
EXPOSE 22 5000
USER root
CMD ["python", "/app/app.py"]
