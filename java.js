document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
  
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
  
            // Hide all content divs
            contents.forEach(content => content.classList.remove('active'));
            // Show the content corresponding to the clicked button
            const activeContent = document.getElementById(button.dataset.tab);
            activeContent.classList.add('active');
        });
    });
  });