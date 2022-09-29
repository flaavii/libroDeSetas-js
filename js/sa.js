const { value: age } = await Swal.fire({
  title: 'Ingrese su edad',
  input: 'number',
  inputLabel: 'Comencemos a escribir...',
  inputPlaceholder: 'Ingrese su edad'
})

if (age) {
  Swal.fire(`Entered email: ${age}`)
}

