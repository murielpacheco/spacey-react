import { ArrowLeft, ArrowRight, GalleryContainer } from './styles'

const images = [
   {
     id: 1,
     src: "../../../assets/mars-img1.svg",
     name: "Imagem 1"
   },
   {
    id: 2,
    src: "../../../assets/mars-img2.svg",
    name: "Imagem 2"
   },
   {
    id: 3,
    src: "../../../assets/mars-img3.svg",
    name: "Imagem 3"
   },
   {
     id: 4,
     src: "../../../assets/mars-img1.svg",
     name: "Imagem 1"
   },
   {
    id: 5,
    src: "../../../assets/mars-img2.svg",
    name: "Imagem 2"
   },
   {
     id: 6,
     src: "../../../assets/mars-img3.svg",
     name: "Imagem 3"
   },
   {
     id: 7,
     src: "../../../assets/mars-img1.svg",
     name: "Imagem 1"
   },
 ]
 
export function Gallery() {
   return (
     <>
       <GalleryContainer>
         <ArrowLeft />
         {images.map(image => (<img src={image.src} key={image.id} alt={image.name} />))}
         <ArrowRight />
       </GalleryContainer>
     </>
   );
}