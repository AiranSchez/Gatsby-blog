---
template: blog-post
title: "SOLID: Principio de responsabilidad única"
slug: /SingleResponsibility
date: 2021-02-03 15:27
description: Descripción sobre el primero de los principios SOLID denominado
  Principio de responsabilidad única (Single responsibility)
featuredImage: /assets/solid-principles.png
---
Me he propuesto en este año empezar a aprender fundamentos importantes de la programación y, como no podía ser de otra forma, he decidido empezar con los famosos principios SOLID. ¿Qué significan estas siglas?\
\

* **S**ingle responsibility  
* **O**pen / closed
* **L**iskov substitution
* **I**nterface segregation
* **D**ependency inversion

Poco a poco iré explicando con ejemplos cada uno de los principios, pero por ahora vamos a comenzar con uno muy sencillo que es el **principio de responsabilidad única** (Single responsibility).

Éste principio nos indica que **una clase debe hacer una única cosa**. Generalmente solemos ver clases que tienen 10 o más métodos, las cuales no cumplen este principio ya que están muy ligadas a futuros problemas si se quiere cambiar algo o simplemente que esa clase está haciendo más cosas de las que debería. 

Pongamos el ejemplo de un ordenador: 

```typescript
interface Computer {
    price: number,
    turnOn(): void,
    turnOff(): void,
}

class MyComputer implements Computer{

    price: number;

    constructor( price:number ) {
        this.price = price;
    }

    turnOn():void {
        console.log('Booting operating system');
    }
  
    turnOff():void {
        console.log('Shutting down operating system');
    }

    public get Price(): number {
        return this.price;
    }

    public set Price(price: number){
        this.price = price;
    }

}
```

Éste ordenador es muy sencillito. ¿Cuál es el problema? que la clase *Computer* está almacenando atributos y además ejecuta el arranque. Según el principio de responsabilidad única esta clase debería separar la lógica de la presentación. 

Para arreglar esto, separaremos los métodos *turnOn* y *turnOff* en otra clase más acorde con lo que hace: 

```typescript
interface ComputerActions{
    turnOn(): void,
    turnOff(): void
}

class MyComputerActions implements ComputerActions {

    turnOn():void {
        console.log('Booting operating system');
    }
  
    turnOff():void {
        console.log('Shutting down operating system');
    }

}
```

De esta manera podemos eliminar de la clase *MyComputer* los métodos de encender y apagar, así nos queda más limpia y segmentada para su uso general. 

```typescript
interface Computer {
    price: number,
}

class MyComputer implements Computer{

    price: number;

    constructor( price:number ) {
        this.price = price;
    }

    public get Price(): number {
        return this.price;
    }

    public set Price(price: number){
        this.price = price;
    }

}
```

Este ejemplo del ordenador es muy básico pero nos sirve para entender mejor cómo funciona el principio de responsabilidad única