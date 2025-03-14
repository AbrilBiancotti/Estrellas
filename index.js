const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
    const layer = [];
    for (let i = 0; i < totalStars; i++){
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
    }
    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
}

const t1 = "Hace más de 20 años, todas las estrellas ocupaban el cielo en completa armonia";
const t2 = "Hasta que 'Cala', la estrella mas joven de todas, se aburrió de esa vida";
const t3 = "Siempre estuvo atraída por la existencia de los pequeños seres que veía debajo de ella";
const t4 = "Asi que un 30 de Junio decidió dar un giro de 360 grados a su vida";
const t5 = "Bajo, de los mantos celestiales que fueron su hogar desde que tuvo memoria";
const t6 = "Y encontró un nuevo hogar en el cuerpo de una recién nacida, para comenzar su nueva aventura";
const t7 = "Los años fueron pasando, y la pequeña olvidó casi todo de su antigua vida";
const t8 = "Solo recordaba, de forma extrañamente familiar, su antiguo nombre que adoptaría de apodo";
const t9 = "'Cala' tuvo grandes aventuras, paso buenos y malos momentos por igual, hasta que un día, todo cambiaría";
const t10 = "Ella conocería a un 'Titito', que era lo mas bueno del universo y siempre se portaba muy bien";
const t11= "Compartieron muchos años siendo conocidos, amigos y con el paso del tiempo, llegaron a ser pareja";
const t12 = "Ella era la 'Titita' mas terrible que pudiera haber existido";
const t13 = "Aunque también, tenía personalidad de 'Golden Retriever' y el alma mas pura que jamás se haya visto";
const t14 = "'Cala' cambió totalmente la vida del 'Titito', volviendoló la persona mas feliz y afortunada del mundo";
const t15 = "Juntos, tuvieron enormes aventuras, pasaron cosas increíbles y fueron creciendo acompañados el uno del otro";
const t16 = "Hoy, 21 de Mayo del 2024 se cumplen 3 años de la unión de estos 2 seres";
const t17 = "Que, sin querer, encontraron su lugar feliz en el otro, generando además un amor inigualable a cualquiera";
const t18 = "En este tiempo, 'Titito' descubrió el secreto de 'Cala', por lo que decidió darle una sorpresa";
const t19 = "Como no podía llevarla al espacio para visitar a sus hermanas, encontró otra forma";
const t20 = "Y las invitó hoy, en este día tan especial, a la celebración del aniversario mediante a la pantalla";
const t21 = "Esto es solo el comienzo de lo que seguro será la historia de amor mas linda que haya existido";
const t22 = "Pero tendremos que ser pacientes si queremos ver que grandes cosas pasarán con el tiempo a nuestros Protagonistas";
const t23 = "Asi que por hoy, solo nos queda decir 'Felices 3 años Titi', y que sean muchos mas...";
const t24 = "Te ama ayer, hoy y siempre... 'Titito'";

const textos = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24];
let currentIndex = 0;

const mostrarTexto = () => {
    if (currentIndex < textos.length) {
        const mensajeContainer = document.createElement('div');
        mensajeContainer.textContent = textos[currentIndex];
        mensajeContainer.classList.add('mensaje');

        document.body.appendChild(mensajeContainer);

        setTimeout(() => {
            document.body.removeChild(mensajeContainer);
            currentIndex++;
            mostrarTexto();
        }, 10000);
    }
};

setTimeout(mostrarTexto, 10000);

generateSpaceLayer("1px", ".space-1", 200, "25s");
generateSpaceLayer("2px", ".space-2", 100, "20s");
generateSpaceLayer("4px", ".space-3", 25, "15s");
setTimeout(mostrarMensaje, 1000);
