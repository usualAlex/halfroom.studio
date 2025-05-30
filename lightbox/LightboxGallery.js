class LightboxGallery {
  constructor(options) {
    this.options = options;
    this.galleries = [];
    this.currentGallery = null;
    this.currentImage = null;
    this.lightbox = null;
    this.background = null;
  }

  init() {
    const galleries = document.querySelectorAll('.lightboxGallery');
    galleries.forEach((gallery, index) => {
      this.galleries.push(new LightboxGallery.Gallery(gallery, index, this));
    });
  }

  open(galleryIndex, imageIndex) {
    this.currentGallery = this.galleries[galleryIndex];
    this.currentImage = this.currentGallery.images[imageIndex];
    this.showLightbox();
  }

  showLightbox() {
    if (!this.lightbox) {
      this.createLightbox();
    }
    this.lightbox.classList.add('open');
    this.background.classList.add('open');
    this.lightbox.innerHTML = `
      <img src="${this.currentImage.src}">
    `;
    console.log('Image src:', this.lightbox.querySelector('img').src);
  }

  closeLightbox() {
    this.lightbox.classList.remove('open');
    this.background.classList.remove('open');
  }

  createLightbox() {
    this.lightbox = document.createElement('div');
    this.lightbox.classList.add('lightbox');
    this.background = document.createElement('div');
    this.background.classList.add('lightbox-background');
    document.body.appendChild(this.lightbox);
    document.body.appendChild(this.background);
    this.background.addEventListener('click', () => {
      this.closeLightbox();
    });
    this.lightbox.addEventListener('click', (e) => {
      if (e.target.classList.contains('lightbox')) {
        this.closeLightbox();
      }
    });
  }

  static Gallery = class Gallery {
    constructor(gallery, index, lightboxGallery) {
      this.gallery = gallery;
      this.index = index;
      this.lightboxGallery = lightboxGallery;
      this.images = [];
      this.findImages(gallery);
      gallery.querySelectorAll('img').forEach((image) => {
        image.addEventListener('click', (e) => {
          e.preventDefault();
          const imageIndex = this.images.indexOf(image);
          this.lightboxGallery.open(this.index, imageIndex);
        });
      });
    }

    findImages(element) {
      const images = element.querySelectorAll('img');
      images.forEach((image) => {
        this.images.push(image);
      });
      const children = element.children;
      for (const child of element.children) {
        if (child.children.length > 0) {
          this.findImages(child);
        }
      }
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const lightboxGallery = new LightboxGallery();
  lightboxGallery.init();
});