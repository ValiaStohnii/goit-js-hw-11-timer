class CountdownTimer{
  constructor({ targetDate, selector }) {
    this.targetDate = targetDate.getTime();
    this.selector = selector.slice(1);

    this.timer = document.querySelector('.timer');
    this.days = document.querySelector('[data-value="days"]');
    this.hours = document.querySelector('[data-value="hours"]');
    this.mins = document.querySelector('[data-value="mins"]');
    this.secs = document.querySelector('[data-value="secs"]');

    this.start();
  }

  
  start() {
    this.timer.setAttribute("id", this.selector);
    
    setInterval(() => {
      const nowTime = Date.now();
      const deltaTime = this.targetDate-nowTime;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
      
      this.days.textContent = days;
      this.hours.textContent = hours;
      this.mins.textContent = mins;
      this.secs.textContent = secs;        
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days,hours,mins,secs};
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
 
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});