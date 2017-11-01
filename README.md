  # strangerString

  strangerString es un idioma inventado con la finalidad de aprender
  las nuevas directivas que trae ES6.

  ## Descripcion del idioma
    -Si la palabra termia en "ar", se le quitan.
    -Si la  palabra incia con "z", se le añade "pe" al final.
    -Si la palabra traducida tiene 10 o más letras:
        Se debe partir a la mitad y unir con guión del medio.
    -Si la palabra original es un palindromo:
        Ninguna regla anterior cuenta y se devuelve
        La misma palabra intercalando mayúsculas y minúsculas

  ## Instalacion
  ```
  npm install strangerString
  ```
  ## Uso
  ```
  import strangerString from 'strangerString'

  strangerString("Programar") //Program
  strangerString("Zorro") //Zorrope
  strangerString("Zarpar") //Zarppe
  strangerString("abecedario") //abecedario
  strangerString("sometemos") //SoMeTeMoS
  ```
  ## Créditos
  -[Analin Flores] (https://twitter.com/@any28flo)

  ## Licencia
  [MIT] (https://opensource.org/licenses/MIT)
