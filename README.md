# numerosPrimos
Obtiene los números primos hasta un "n" dado

## Para instalar

Hacer el build
```
docker build -t get-primos .
```

Ejecutar luego con el siguiente comando:
```
docker run -t get-primos sh -c "npm run start <valor>"

donde valor debe ser un número entero mayor o igual a 2
```

Para ejecutar los test

```
docker run -t get-primos sh -c "npm run test"
```
