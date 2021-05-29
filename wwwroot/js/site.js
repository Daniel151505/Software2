$("#eliminar").click(function(){
    Swal.fire({
        title: '¿Estas seguro que deseas eliminalo?',
        text: "No podras restauralo una vez eliminado",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado',
            'Eliminado exitosamente',
            'success'
          )
        }
      })
})


$("#asignarCaracteristica").click(function(){

const { value: text } =  Swal.fire({
  input: 'textarea',
  inputLabel: 'Message',
  inputPlaceholder: 'Type your message here...',
  inputAttributes: {
    'aria-label': 'Type your message here'
  },
  showCancelButton: true
})

if (text) {
  Swal.fire(text)
}

})