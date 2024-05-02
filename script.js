document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.loveMe');
    
    posts.forEach(function(post) {
        post.addEventListener('click', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            const rect = post.getBoundingClientRect();
            const leftOffset = rect.left;
            const topOffset = rect.top;

            const xInside = x - leftOffset;
            const yInside = y - topOffset;

            createHeart(e, post, xInside, yInside);
        });

        const createHeart = (e, post, xInside, yInside) => {
            const heart = document.createElement('i');
            heart.classList.add('fa-solid');
            heart.classList.add('fa-heart');
            heart.style.top = `${yInside}px`;
            heart.style.left = `${xInside}px`;
            
            post.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        };
    });
});

