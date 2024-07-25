document.addEventListener('DOMContentLoaded', function() {
  const widgetsContainer = document.getElementById('widgets-container');

  const widgets = [
    {
      type: 'google-slide',
      title: 'Company Presentation',
      url: 'https://docs.google.com/presentation/d/1Sm1EnwbUc9yPwa96ZQPzowBMoq3d8UMFbEVRhOiAvIw/edit?usp=sharing'   
    },
    {
      type: 'pomodoro-timer',   
      title: 'Pomodoro Timer'   
    },
    // Add more widgets here
  ];

  widgets.forEach(widget => {
    const widgetElement = document.createElement('div');   
    widgetElement.className = 'widget';

    if (widget.type === 'google-slide') {
      widgetElement.innerHTML = `
        <h2>${widget.title}</h2>
        <iframe src="${widget.url}" class="google-slide-widget"></iframe>
      `;
    } else if (widget.type === 'pomodoro-timer') {
      widgetElement.innerHTML = `
        <h2>${widget.title}</h2>
        <div id="pomodoro-timer"></div>
      `;
      loadPomodoroTimer(widgetElement.querySelector('#pomodoro-timer'));
    }

    widgetsContainer.appendChild(widgetElement);
  });
});



  