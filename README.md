# numerosPrimos
Obtiene los números primos hasta un "n" dado

## Para instalar

### Ejecutar con NPM
Dentro de la carpeta del proyecto ejecutar
```
npm install
```

Luego para ejecutar la aplicación
```
npm run start <valor>
donde <valor> representa el número hasta donde deseamos generar los primos
```

Para ejecutar los test
```
npm run test
```

### Ejecutar con docker
Hacer el build
```
docker build -t get-primos .
```

Ejecutar luego con el siguiente comando:
```
docker run -t get-primos sh -c "npm run start <valor>"
donde <valor> representa el número hasta donde deseamos generar los primos
```

Para ejecutar los test

```
docker run -t get-primos sh -c "npm run test"
```
