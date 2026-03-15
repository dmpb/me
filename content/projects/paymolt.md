---
title: Paymolt
description: Aplicación web que permite generar enlaces de pago para aceptar pagos con tarjetas de crédito o débito mediante la integración con la pasarela de pagos Culqi.
image: paymolt.png
slug: paymolt
---

![PHP](https://img.shields.io/badge/php-%23777BB4.svg?style=flat&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/laravel-%23FF2D20.svg?style=flat&logo=laravel&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=flat&logo=vuedotjs&logoColor=%234FC08D)
![Inertia.js](https://img.shields.io/badge/Inertia.js-7C3AED?style=flat&logo=Inertia&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![REST API](https://img.shields.io/badge/REST%20API-0B7285?style=flat)

## Descripción del Proyecto

Paymolt es una aplicación web que permite generar **enlaces de pago para aceptar pagos en línea utilizando tarjetas de crédito o débito**.

El objetivo principal del proyecto es ofrecer una solución simple para vendedores o negocios que desean cobrar por internet sin necesidad de desarrollar una infraestructura compleja de pagos.

La aplicación permite crear formularios de pago dinámicos que pueden compartirse mediante un enlace, facilitando el proceso de cobro para productos o servicios.

Paymolt funciona como una capa de integración con **Culqi**, una pasarela de pagos utilizada para procesar las transacciones de forma segura.

El sistema genera el enlace de pago y gestiona el flujo de la transacción mientras que el procesamiento del dinero es realizado directamente por la pasarela de pago.

Esto garantiza que la aplicación **no tenga acceso directo al dinero ni a los datos sensibles de las tarjetas**.

---

## Problema que Resuelve

Muchos pequeños negocios o vendedores desean aceptar pagos con tarjeta en internet, pero no cuentan con una solución técnica para hacerlo.

Paymolt simplifica este proceso permitiendo:

- Generar enlaces de pago rápidamente
- Compartir enlaces de cobro con clientes
- Procesar pagos mediante tarjeta
- Centralizar la gestión de cobros

---

## Funcionamiento General

1. El usuario crea un enlace de pago indicando el monto.
2. El sistema genera un formulario de pago.
3. El cliente accede al enlace.
4. Culqi procesa el pago.
5. El sistema registra el resultado de la transacción.

---

## Repositorio

https://github.com/dmpb/paymolt
