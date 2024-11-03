FROM node:18 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package.json ./
RUN npm install
COPY frontend/ .  
RUN npm run build

FROM python:3.9 AS backend
WORKDIR /app/backend
COPY backend/requirements.txt ./
RUN pip install -r requirements.txt
COPY backend/ .  

FROM nginx:alpine
COPY --from=frontend-build /app/frontend/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=backend /app/backend /app/backend

EXPOSE 80 5000

CMD ["sh", "-c", "nginx -g 'daemon off;' & python /app/backend/app.py"]
