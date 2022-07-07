import paleta1 from '../assets/paleta1.jpg';
import paleta2 from '../assets/paleta2.jpg';
import paleta3 from '../assets/paleta3.jpg';
import paleta4 from '../assets/paleta4.jpg';
import paleta5 from '../assets/paleta5.jpg';
import paleta6 from '../assets/paleta6.jpg';
import paleta7 from '../assets/paleta7.jpg';
import paleta8 from '../assets/paleta8.jpg';
import paleta9 from '../assets/paleta9.jpg';

const products = [
    {id: 1, price:'37.999', title:'KOMBAT DELTA FORCE 18K', description: "¿Hambre de Kombate? Nuestra pala más icónica vuelve en una nueva edición. \n\nEsta pala profesional de formato redondo tiene unas características increíbles en defensa y ahora la hemos dotado de diseño renovado en verdes...Mantenemos su esencia pero tenemos la pala... ¡más militar que nunca! \n\nNuestra nueva Delta Force cuenta con un balance centrado para mejorar el manejo de la pala en pista, un tubular 100% de carbono. Como novedad, esta edición de la pala cuenta con un nuevo carbono 18k con acabados rugosos en lija que dará a tus golpes el efecto definitivo. \n\nEsta es tu pala, esta es tu arma: ¡Al Kombate!", pictureUrl: paleta3, category: 'redondas'},


    {id: 2, price:'37.999', title:'TROYA AJAX', description: '¡¡Troya llega a Kombat!! Tres moldes diferentes con un mismo corazón, el corazón del KOMBATiente: Aquiles en diamante, Ulises en lágrima y Ajax de forma redonda.\n\nCon la Kombat Troya Ajax tendrás poder, valentía y nobleza entre tus manos a la hora de ir al KOMBATe como el legendario héroe de la mitología griega.\n\nDestaca su formato redondo que convierte a esta pala en el mejor escudo para la batalla, gracias a su buen comportamiento en defensa. El carbono 12K de esta pala le aporta una gran salida de bola que, combinada con sus planos rugosos acabados en lija, ¡no perderá un ápice de control! Para rematar, la hemos dotado de un diseño cuya combinación de colores harán que desees tener esta pala en tus batallas y convertirte en legendario como Ajax.', pictureUrl: paleta4, category: 'redondas'},


    {id: 3, price:'37.999', title:'KOMBAT SAS CONTROL II', description: 'Controla tu fuerza y domina tu ira con la nueva SAS CONTROL. Una pala de pádel de formato redondo y un amplio punto dulce para favorecer tu golpe sea cual sea tu nivel de juego. ¡Es perfecta para jugadores que busquen control y a su vez necesiten disponer de una gran salida de bola!\n\nLa Kombat SAS Control destaca por tener una capa de fibra de vidrio aluminizada que ofrece una salida de bola digna de las palas de ataque. Fabricada con goma EVA, tubular 100% de carbono y planos de alutex como la anterior edición de este modelo, la nueva SAS cuenta con un acabado lija para favorecer los efectos en pista y un nuevo diseño que te cautivará.\n\nSi en pista buscas comodidad en el fondo y tacto con la bola, pero además necesitas salida, potencia y agresividad... ¡No dudes que la SAS Control está hecha para ti!', pictureUrl: paleta5, category: 'redondas'},


    {id: 4, price:'37.999', title:'KOMBAT IA-63 PAMPA', description: '¡Un arma letal! Inspirada en el avión de entrenamiento avanzado con capacidades de combate de la Fuerza Aérea Argentina. La Kombat IA-63 PAMPA es una pala profesional pensada para grandes luchadores que buscan la máxima potencia en la pista. \n\nDe ormato diamante y balance alto, a esta pala la hemos dotado con carbono 12K y una gran salida de bola. También están de vuelta los planos rugosos con textura KOMBAT, para dotarla con control y efecto.\n\n\nSiente la pasión de Argentina en su diseño con detalles únicos. ¡KOMBATiente! esta pala será tu aliada en la pista.', pictureUrl: paleta1, category: 'diamante'},


    {id: 5, price:'37.999', title:'KOMBAT BLACK 18K', description: 'Llega a Kombat la lujuria hecha pala: ¡El arma definitiva!\n\nLa nueva Kombat Black Edition 18K es una pala de gama alta con formato diamante que se convertirá en tu mejor aliada para el Kombate.\n\nEsta nueva edición viene con un diseño renovado más espectacular que nunca y carbono 18k con planos rugosos en acabado lija. Todas estas características la convierten en una ¡¡pala imponente!!\n\nEn definitiva, la Kombat Black Edition es la pala de pádel profesional para todos, ¡es puro espectáculo!', pictureUrl: paleta2, category: 'diamante'},


    {id: 6, price:'37.999', title:'TROYA AQUILES', description: '¡¡Troya llega a Kombat!! Tres moldes diferentes con un mismo corazón, el corazón del KOMBATiente: Aquiles en diamante, Ulises en lágrima y Ajax de forma redonda.\n\nLa Kombat Troya Aquiles es una pala profesional pensada para grandes guerreros que buscan la máxima potencia en pista. De formato diamante y balance alto, a esta pala la hemos dotado con carbono 12K y ¡unos planos rugosos acabados en lija!\n\n¿Su diseño? ¡Simplemente ESPECTACULAR! Sus azules tan característicos y sus detalles en color bronce hacen que esta arma sea una pala grandiosa.\n\nAquiles se convirtió en el héroe de la Guerra de Troya, tú serás el protagonista de todos tus KOMBATes. Hazte ya con esta pala y conviértete en invencible.', pictureUrl: paleta6, category: 'diamante'},


    {id: 7, price:'37.999', title:'KOMBAT HUNTER 3K', description: 'La nueva Kombat Hunter es una de esas palas que te enamoran a simple vista. Con una espectacular salida de bola es ¡perfecta para luchar en tus ‘batallas’!\n\nEsta pala de alta gama de formato lágrima y carbono 3K es… ¡¡todo un escándalo!! Además, la hemos dotado con un diseño totalmente en mate y planos rugosos acabados en lija. Al igual que la edición anterior, no pudimos decantarnos por un único color para nuestra ‘K’ ¡nos fascinan los dos! ¡Así que volvimos a diseñar cada plano de un color diferente! \n\nSus características, su diseño y su precio hacen que la Kombat Hunter sea una pala sorprendente. ¡Cuando la tengas en pista te impresionará! ', pictureUrl: paleta7, category: 'lagrima'},


    {id: 8, price:'37.999', title:'TROYA ULISES', description: '¡¡Troya llega a Kombat!! Tres moldes diferentes con un mismo corazón, el corazón del KOMBATiente: Aquiles en diamante, Ulises en lágrima y Ajax de forma redonda.\n\nLa Kombat Troya Ulises está inspirada en este personaje de la mitología griega, ya que comparte las características de este héroe: brillantez, astucia y versatilidad en su carácter.\n\nEsta pala de formato lágrima la hemos creado con unos planos de carbono 12K acabados el lija para que tus golpes tengan el efecto definitivo en la batalla. Cuenta con un nuevo diseño sorprendente y espectacular en azules y bronce que te enamorará en cuanto la tengas en tus manos.\n\nEn definitiva, la Kombat Troya Ulises es ¡la pala perfecta para salir al KOMBATe!', pictureUrl: paleta8, category: 'lagrima'},


    {id: 9, price:'37.999', title:'KOMBAT APACHE ICE 18K', description: 'La nueva pala Kombat Apache 18k es la pala que todos querrán tener.\n\nUna pala profesional con un balance equilibrado, goma EVA con alta densidad y un molde de formato lágrima: el arma perfecta para jugadores que buscan una pala polivalente, tanto en el juego de ataque como en defensa.\n\nComo novedad esta edición presenta un nuevo carbono 18k con planos rugosos en acabado lija.\n\nLa nueva Kombat Apache te aportará mucha salida de bola por lo que el control se lo tendrás que dar tú.Su nuevo diseño en blancos y azules así como su nuevo carbono y planos rugosos hacen esta pala única y ¡¡espectacular!!', pictureUrl: paleta9, category: 'lagrima'},
];

export default products;