class Tienda {
  constructor({
    nombre = "Tienda Loop",
    dueño = "Juan Martinez",
    cantSucursales = 0,
    prendasVender = ["jeans", "shorts", "polleras"],
  }) {
    (this.nombre = nombre),
      (this.dueño = dueño),
      (this.cantSucursales = cantSucursales),
      (this.prendasVender = prendasVender);
  }
}

class Sucursales extends Tienda {
  constructor(props) {
    super(props),
      (this.nroSucursal = nroSucursal),
      (this.encargado = encargado),
      (this.direccion = direccion),
      (this.cantEmpleados = cantEmpleados);
  }
}

class Empleados {
  constructor(
    nombre,
    apellido,
    telefono,
    rol = ["gerente", "vendedor", "cajero"]
  ) {
    (this.nombre = nombre),
      (this.apllido = apellido),
      (this.telefono = telefono),
      (this.rol = rol);
  }
}

class Gerente extends Empleados {
  constructor(props) {
    super(props);
  }

  soyGerente(user) {
    for (const item of this.rol) {
      if (item === user.rol) {
        console.alert(
          `Mi nombre es ${this.nombre} y soy Gerente de esta sucursal.`
        );
      }
    }
  }
}

class Vendedor extends Empleados {
  constructor(props) {
    super(props);
  }

  soyVendedor(user) {
    for (const item of this.rol) {
      if (item === user.rol) {
        console.alert(
          `Mi nombre es ${this.nombre} y soy Vendedor de esta sucursal.`
        );
      }
    }
  }
}

class Cajero extends Empleados {
  constructor(props) {
    super(props);
  }

  soyCajero(user) {
    for (const item of this.rol) {
      if (item === user.rol) {
        console.alert(
          `Mi nombre es ${this.nombre} y soy Cajero de esta sucursal.`
        );
      }
    }
  }
}

const empleado1 = new Empleados({
  nombre: "Ana",
  apellido: "Martinez",
  telefono: "091086359",
  rol: ["vendedor"],
});
