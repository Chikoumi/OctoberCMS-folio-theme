# [October CMS](http://octobercms.com) portfolio theme


This is a one page portfolio website with about, gallery and contact form.
## Information :

Use it with RJ GALLERY and modify end of raviraj/rjgallery/components/gallery/default.htm wtih :


```html
<div id="gallery">
    {% for image in gallery.images %}
<!--- article-->
<article data-src="{{ image.path }}" data-title="{{ image.title }}" data-desc="{{ image.description }}">
    <section>
        <div class="folio_thumb" style="background-image:url('{{ image.path }}');"></div>
         <img src="{{ image.getThumb(width, height, resizer) }}" alt="{{ image.title }}" />

        <div class="folio_content">
            <h3>{{ image.title }}</h3>
        </div>
    </section>
</article>
<!---/article-->      
```
{% endfor %}
</div>


## Preview
### Header :
![header](https://raw.githubusercontent.com/Chikoumi/OctoberCMS-folio-theme/master/assets/img/header.png "Header")

### About :
![about](https://raw.githubusercontent.com/Chikoumi/OctoberCMS-folio-theme/master/assets/img/about.png "About")

### Gallery
![Folio](https://raw.githubusercontent.com/Chikoumi/OctoberCMS-folio-theme/master/assets/img/folio.png "Folio")

### Contact
![Contact](https://raw.githubusercontent.com/Chikoumi/OctoberCMS-folio-theme/master/assets/img/contact.png "Contact")
