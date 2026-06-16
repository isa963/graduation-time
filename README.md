# 🎓 Graduation Time - Amina Isabela

Una invitación interactiva y elegante para la graduación de Amina Isabela en Comunicación.

## ✨ Características

- 🎯 **Pregunta Interactiva**: Los invitados deben responder "¿De qué carrera?" antes de acceder a la invitación
- ⏰ **Cuenta Regresiva**: Cuenta hacia el 20 de junio de 2026 a las 7:00 PM
- 📸 **Galería de Fotos**: Espacio para compartir momentos especiales
- 🗺️ **Mapa de Ubicación**: Ubicación integrada de Hacienda La Bartola
- 📅 **Información del Evento**: Fecha, hora y ubicación detallada
- ✨ **Diseño Elegante**: Tipografía Playfair Display con colores Cherry Cola (#9A0002) y Pink Lemonade (#FFB3BB)
- 📱 **Responsive**: Funciona perfectamente en cualquier dispositivo
- 💌 **RSVP**: Opción para confirmar asistencia

## 🚀 Cómo Usar

### 1. Reemplazar las Fotos (Placeholders)

En el archivo `index.html`, busca la sección de galería y reemplaza las URLs de placeholder:

```html
<div class="gallery-item" style="background-image: url('https://via.placeholder.com/300x300?text=Foto+1');">
```

Cámbialo por tu URL de imagen:

```html
<div class="gallery-item" style="background-image: url('TU_URL_DE_IMAGEN_AQUI');">
```

### 2. Personalizar el Evento

Puedes editar:
- **Pregunta**: Cambiar en la línea de `question-text`
- **Respuesta correcta**: En `script.js`, cambiar el valor de `correctAnswer`
- **Fecha y Hora**: En `script.js`, modificar `targetDate`
- **Ubicación**: En la sección de información del evento

### 3. Desplegar

#### Opción A: GitHub Pages (Gratis)
1. En tu repositorio, ve a Settings → Pages
2. Selecciona `main` como rama
3. Tu sitio estará en: `https://isa963.github.io/graduation-time`

#### Opción B: Compartir directamente
Puedes compartir los archivos o usar un servicio como:
- Netlify
- Vercel
- Google Drive (descargando y abriendo localmente)

## 📧 Cómo Compartir

Comparte el link directo con tus invitados:
- `https://isa963.github.io/graduation-time` (si usan GitHub Pages)
- O el link que proporcione tu servicio de hosting

El link es compatible con Google y se puede abrir desde cualquier dispositivo.

## 🎨 Colores

- **Primary (Cherry Cola)**: `#9A0002`
- **Secondary (Pink Lemonade)**: `#FFB3BB`

## 📝 Notas

- La respuesta correcta a la pregunta es: **Comunicación**
- La cuenta regresiva se actualiza automáticamente cada segundo
- El mapa está configurado para Hacienda La Bartola en Querétaro
- Todas las secciones tienen animaciones elegantes

## 💡 Próximas Mejoras (Opcional)

- [ ] Sistema de notificaciones por email para RSVPs
- [ ] Música de fondo
- [ ] Efectos de confeti al confirmar asistencia
- [ ] Galería interactiva con zoom
- [ ] Formulario de contacto

---

✨ **Creada con amor para tu graduación** 🎓
