# GIT_Tutorial

## Introducción

Git significa que, esta es una herramienta tecnológica que nos permite guardar esos cambios que se hacen en el código tanto del usuario principal como de los colaboradores; pero, de una manera más exacta; como por ejemplo; saber quién hizo los cambios, saber la fecha, hora exacta; además con estos datos de se puede regresar en algún momento que haya podido encontrarse un error en el código.

Git fue diseñado para operar en un entorno Linux. Pero, actualmente es multiplataforma, es decir, es compatible con Linux, MacOS y Windows. En la máquina local se encuentra Git, se utiliza bajo la terminal o línea de comandos y tiene comandos como merge, pull, add, commit y rebase, entre otros.

## Algunos Conceptos para Conocimientos Generales

### El y/o la Terminal CMD

Para muchos es de pleno conocimiento que, **la Terminal CMD**, también conocida como Símbolo del Sistema, es una ventana de comandos que permite interactuar con el sistema operativo Windows de manera textual. A continuación, se presentan algunos conceptos básicos y comandos útiles para empezar a utilizar la Terminal CMD:

### Acceso a la Terminal CMD

Para acceder a la Terminal CMD, se pueden seguir estos pasos:

Existen varia formas de acceder; una de ellas Hacer clic en el botón “Iniciar” o desde el símbolo “Lupa” en la barra de tareas se escribe **CMD** en el cuadro de búsqueda; otra es el comando ejecutar en donde se oprimen las teclas Windows + la letra R, teclear enter y se escribe dentro de esta las letras CMD. Seguidamente, Hacer clic en el resultado “Símbolo de sistema” para abrir la Terminal CMD.

### Comandos Básicos

A continuación, se presentan algunos comandos básicos para empezar a utilizar la Terminal CMD:

**cd**: Cambia el directorio actual. Ejemplo: cd Documents para cambiar al directorio “Documentos”.
**dir**: Muestra la lista de archivos y carpetas en el directorio actual.
**mkdir**: Crea un nuevo directorio. Ejemplo: mkdir MiCarpeta para crear un directorio llamado “MiCarpeta”.
**del**: Elimina un archivo o carpeta. Ejemplo: del archivo.txt para eliminar el archivo “archivo.txt”.
**cls**: Limpia la pantalla y elimina cualquier texto que esté en la pantalla.

### Ventajas de utilizar la Terminal CMD

La Terminal CMD te permite realizar tareas de manera rápida y eficiente, como:

1. Navegar en archivos y carpetas
2. Ejecutar comandos y scripts
3. Realizar tareas de mantenimiento y configuración del sistema
4. Acceder a la información del sistema y los archivos
5. Diferencia entre Consola, Terminal y Shell

Otro aspecto a tener en cuenta o más bien la herramienta consola, terminal y shell son términos que a menudo se utilizan indistintamente, pero tienen significados ligeramente diferentes:

**Consola**: Un dispositivo físico o virtual que se utiliza para enviar comandos a un ordenador y mostrar su respuesta.
**Terminal**: Un entorno de entrada y salida de texto que emula una GUI, es decir, una consola en una interfaz gráfica de usuario.
**Shell**: Un programa que emula la consola y te permite interactuar con el sistema operativo.

En resumen, la Terminal CMD es una ventana de comandos que te permite interactuar con el sistema operativo Windows de manera textual y como su nombre lo índica se realiza a traves de comandos, y es un herramienta útil para realizar tareas de manera rápida y eficiente. A continuación y mediante este link ([UrbanTcno](https://www.mundodeportivo.com/urbantecno/windows/todos-comandos-cmd-de-windows-lista-completa)) se puede tener acceso a una guía de los comandos más utilizados en esta herramienta.

## Power Shell

Incialmente, PowerShell es un shell de comandos moderno y un lenguaje de scripting desarrollado por Microsoft. Fue lanzado por primera vez en 2006 y se ha convertido en una herramienta fundamental para administrar y automatizar tareas en Windows, Linux y macOS.

## Características de PowerShell

Entre las características más destacadas de PowerShell se encuentran:

1. **Interfaz de línea de comandos**: PowerShell es una interfaz de línea de comandos que permite a los usuarios interactuar con el sistema operativo mediante comandos escritos en lenguaje natural.
2. **Lenguaje de scripting**: PowerShell incluye un lenguaje de scripting que permite crear scripts complejos para automatizar tareas repetitivas y tediosas.
3. **Integración con .NET**: PowerShell acepta y devuelve objetos .NET, lo que permite a los desarrolladores crear aplicaciones y scripts más potentes.
4. **Extensibilidad**: PowerShell es extensible a través de módulos y cmdlets, que permiten agregar funcionalidades adicionales a la herramienta.
5. **Desired State Configuration (DSC)**: PowerShell incluye un marco de administración de configuración que permite administrar la infraestructura empresarial con configuración como código.

### Uso de PowerShell

PowerShell se utiliza para una variedad de tareas, incluyendo:

1. Automatización de tareas repetitivas y tediosas
2. Gestión de sistemas y aplicaciones
3. Creación de scripts para la automatización de tareas
4. Integración con otros sistemas y herramientas
5. Desarrollo de aplicaciones y scripts

### Ventajas de PowerShell

Entre las ventajas de PowerShell se encuentran:

1. Mejora la eficiencia y la productividad al automatizar tareas repetitivas y tediosas
2. Permite a los administradores y desarrolladores crear scripts y aplicaciones más potentes y flexibles
3. Es compatible con Windows, Linux y macOS
4. Es extensible y personalizable a través de módulos y cmdlets

En resumen, PowerShell es una herramienta poderosa y flexible que permite a los administradores y desarrolladores automatizar tareas, gestionar sistemas y aplicaciones, y crear scripts y aplicaciones más potentes y flexibles. Para más información se puede acceder a este link:https:[¿Qué es Power Shell?](https://learn.microsoft.com/es-es/powershell/scripting/overview?view=powershell-7.4)

## Uso de Git

Inicialmente, **GIT** es un sistema de control de versiones de código fuente distribuido, creado por *Linus Torvalds en 2005*. Es una herramienta muy popular y ampliamente utilizada en el desarrollo de software, especialmente en proyectos de código abierto.

**Git** sirve para trabajar de manera más organizada y colaborativa en proyectos de desarrollo de software. Estas son algunas de sus principales características:

1. **Control de versiones**: Git almacena la información como un conjunto de archivos. Te permite llevar un registro de los cambios que haces en tus archivos, lo que significa que siempre puedes volver a versiones anteriores si algo sale mal.

2. **Ramificación**: Puedes crear ramas en tu proyecto, lo que te permite trabajar en diferentes características o aspectos del mismo sin afectar el trabajo de los demás.

3. **Colaboración**:En Git, varias personas pueden trabajar en diferentes aspectos del proyecto al mismo tiempo.

4. **Seguridad** No existen cambios, corrupción en archivos o cualquier alteración sin que Git lo sepa. Git cuenta con 3 estados en los que es posible localizar archivos: Staged, Modified y Committed.

5. **Flexibilidad**: Casi todo en Git es local. Es difícil que se necesiten recursos o información externos, basta con los recursos locales con los que cuenta. Por lo tanto es muy flexible y permite a los desarrolladores crear ramas de código separadas para trabajar en diferentes características o soluciones de errores sin afectar el código principal.

6. **Distribuido**: Git es un sistema distribuido, lo que significa que cada desarrollador puede tener una copia local del proyecto y trabajar en ella sin necesidad de estar conectado a un servidor central.

7. **Colaboración**: Git facilita la colaboración entre desarrolladores al permitir que cada desarrollador trabaje en su propia copia local del proyecto y cuando envíe cambios al repositorio global, se asegure que su código no estropea o realiza modificaciones introducidas por otros desarrolladores.

## Ventajas de Utilizar Git

1. **Facilita el trabajo en equipo**: Git permite a los desarrolladores trabajar en equipo de manera efectiva, sin conflictos de código y con un seguimiento preciso de los cambios realizados.

2. **Flexibilidad**: Git es muy flexible y permite a los desarrolladores crear ramas de código separadas para trabajar en diferentes características o soluciones de errores.

3. **Seguridad**: Git proporciona una forma segura de almacenar y gestionar el código fuente de un proyecto, lo que reduce el riesgo de pérdida de datos y errores.

4. **Rapidez**: Git es muy rápido y eficiente, lo que permite a los desarrolladores trabajar de manera rápida y eficaz.

En resumen, **Git** es una herramienta fundamental para el desarrollo de software que permite a los desarrolladores trabajar en equipo de manera efectiva, realizar un seguimiento de los cambios en el código fuente y colaborar en proyectos de manera segura y eficiente.

## Algunos Comandos

Git tiene una sintaxis de comandos bastante sencilla y fácil de aprender, lo que lo hace accesible incluso para principiantes en programación

## ¿Para qué Utilizar GIT?

1. Permite regresar a versiones anteriores de forma sencilla y muy rápida.
2. Facilita el trabajo colaborativo; como se explicaba anteriormente.
3. Permite respaldar los proyectos en la nube; ejemplo, con GitHub.
4. Reduce considerablemente los tiempos de Deploy; es decir, muchos hosting o servidores tienen GIT incorporado y si un desarrollador quiere subir el cambio una parte del código o una parte de ese archivo entonces solamente vamos a subir ese cambio al hosting; entonces, se reducen los costos asociados a ese servidor.
5. Las "Branches" o ramas, permiten trabajar con una base de código paralela al proyecto en sí; entiéndase que, o sea que se puede realizar el código en diferentes ramas.

## CONFIGURAR GITHUB

1. Primero se debe de crear una cuenta en GitHub llenar los datos que exige la PLATAFORMA.
2. extraído de: [Aprende GIT ahora!](https://www.youtube.com/watch?v=VdGzPZ31ts8)

## Pasos para configurar git por primera vez y de manera GLOBAL

Ahora, se procede a abrir la terminal de GIT; esta tiene una interfaz gráfica un poco escueta por decir algo; pero, es muy agradable de visualizar; a continuación se muestran esos pasos iniciales para la configuración de GIT.

1. git config --global user.name "nombre completo"// Aquí se escribe el nombre del usuario
2. git config user.name //para verificar el usuario
3. git config user.email "usuario del correo que tenemos en git hub preferiblemente"
4. git user.email //para verificar el email del usuario
5. git config --global core.editor "code --wait"// Este comando permite que la terminal se quede esperando hasta que se abra el editor de texto.
6. git config --global -e //esto permite abrir nuestro editor y permanece así hasta que lo cerremos.
7. git config --global core.autocrlf true // ojo solamente para usuarios de Windows
8. git config --global core.autocrlf input // ojo solamente para usuarios de linux

## Algunos Comandos Básicos

Como es lo normal las terminales nombradas en este documento tiene algunos comandos principales por decirlo de esa manera; por lo tanto en la terminal de GIT no es la excepción.

1. git init // para inicializar un repositorio completamente vacío dentro los servidores de git.
2. git status // para ver todos los archivos que se encuentran abiertos sin guardar. Aparecen en color rojo.
3. git add . // Con le punto se agregan todos los archivos. o en su defecto.
4. git add nombredelarchivo.tal // O sea se escribe el nombre del archivo a guardar.
5. git status // debe de aparecer en color verde; pero, este paso es opcional.
6. git commit -m "Aquí se escribe un comentario acorde a lo que se hizo en el directorio".
7. git push // como su nombre lo indica obliga a que se suban y se alojen los códigos a nuestro repositorio de git hub.

### Otros Comandos Básicos

1. git -version // para saber en qué versión se está trabajando
2. git config -h // nos deja ver la lista de todas las configuraciones de git.
3. ls //nos permite ver todas las carpetas y los archivos de nuestro directorio.
4. ls -a // permite ver todos los archivos que se encuentren ocultos.
5. pwd // permite ver en que directorio nos encontramos.
6. cd // nos permite regresar al directorio inmediatamente anterior o lo nombran textualmente.
7. cd .. // con los dos puntos nos permite devolvernos a la carpeta o directorio de nuestros archivos en la jerarquía correspondiente.
8. mkdir se escribe el nombre de la carpeta a crear // Para crear una carpeta o un directorio.
9. rm nombredelarchivo.tal //n como su nombre lo indica eliminar ese archivo o directorio.
10. git restore --stage nombredelarchivo.tal // para recuperar el archivo que fue eliminado.
11. mv nombredelarchivo.tal // sirve para mover o renombrar los archivos.
12. git ignore // sirve para que no se muestren ninguna clase de archivos al repositorio.
13. git status -s // nos permite ver cada uno de los archivos que son ignorados; esto nos sirve para adherir el archivo que deseamos agregar realmente a nuestro repositorio.
14. git diff // nos muestra todo el texto de los cambios que nosotros podamos agregar git add.
15. git --staged// sirve solamente para los archivos y su estado.
16. git log --online//sirve para ver el historial de los commit anteriores; aparecen unos números y letras de color diferente  al lado derecho lo que significa que es un sólo registro para ese commit con su respectivo mensaje o comentario.
17. git log --stat//para ver las estadísticas del commit de autor; cuantas líneas en la estructura HTML.
18. git log checkout //aquí se escribe sin las comillas el commit que se quiere eliminar o corregir" pero ojo al eliminar el commit.

## Ramas de GIT

1. git branch//O sea las ramas que se han hecho del código en el tiempo. Y nos debe de aparecer la palabra main.
2. cat nombredelarchivo.tal // para ver el contenido de nuestro archivo.
3. git checkout master (main).
4. git chekout -b ramafooter //como se quiera llamar a esa rama.
5. git chekout main (master) para regresar a la rama principal pues nos encontrábamos en ramafooter.
6. git log //nos muestra lo que se ha hecho en la rama main.
7. git merch ramafooter //para unir la ramafooter y la rama main.
8. git branch -d y el nombre de la rama para eliminarla.

## Comandos Para Trabajo Remoto Con GIT

1. git clone url_del_servidor_remoto: Nos permite descargar los archivos de la última versión de la rama principal y todo el historial de cambios en la carpeta .git.
2. git fetch: Lo usamos para traer actualizaciones del servidor remoto y guardarlas en nuestro repositorio local en caso de que hayan, por supuesto.
3. git merge: También usamos el comando git merge con servidores remotos. Lo necesitamos para combinar los últimos cambios del servidor remoto y nuestro directorio de trabajo.
4. git pull: Básicamente, git fetch y git merge al mismo tiempo.

### Algunos comandos que pueden ayudar cuando colaboren con proyectos muy grandes de GitHub

    * **git log --online** //Te muestra el id commit y el título del commit.
    * **git log --decorate** //Te muestra donde se encuentra el head point en el log.
    * **git log --stat** //Explica el número de líneas que se cambiaron brevemente.
    * **git log -p** //Explica el número de líneas que se cambiaron y te muestra que se cambió en el contenido.
    * **git shortlog** //Indica que commits ha realizado un usuario, mostrando el usuario y el titulo de sus commits.
    * **git log --graph** --online --decorate y git log --pretty=format:"%cn hizo un commit %h el día %cd" //Muestra mensajes personalizados de los commits.
    * **git log -3** //Limitamos el número de commits.
**git log --after=“2018-1-2”, git log --after=“today” y git log --after=“2018-1-2” --before=“today”** // son los commits para localizar por fechas.
**git log --author=“Name Author”** //Commits realizados por un autor que cumplan exactamente con el nombre.
**git log --grep=“INVIE”** //Busca los commits que cumplan tal cual está escrito entre las comillas.
**git log --grep=“INVIE” –i** //Busca los commits que cumplan sin importar mayúsculas o minúsculas.
**git log –-index.html** //Busca los commits en un archivo en específico.
**git log -S “Por contenido”** //Buscar los commits con el contenido dentro del archivo.
**git log > log.txt** //guardar los logs en un archivo txt.

Es prudente recordar que, en la web hoy en día existen infinidades de informaciones al respecto del tema de GTI, y como sugerencia en el siguiente link de la fuente original de [GIT](https://git-scm.com/) en esta, se pueden enriquecer con los conocimiento sencillos de este apasionante tema.
