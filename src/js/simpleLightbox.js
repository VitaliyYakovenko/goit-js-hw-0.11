import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



export default function initializeLightbox() {
    if (gallery) {
        gallery.refresh();
    }
}

export let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox');

