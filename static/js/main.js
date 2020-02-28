const app = {
    initialize() {
        console.log('\n' + `%c[service] main.js ${arguments.callee.name}() running! \n` + ' ', 'color: #00d400; font-weight: bold');
        console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');
        this.cached();
        
        this.dateInput.calc.addEventListener('click', () => {
            this.calculate();
        })
    },

    cached() {
        console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');
        
        this.dateInput = {
            start: document.querySelector('#startDate').value,
            end: document.querySelector('#endDate').value,
            calc: document.querySelector('#calc')
        }
        
        this.errorMsg = document.querySelector('#error');
        this.diffOutput = document.querySelector('#diffOutput');
    },
    
    calculate() {
        this.cached();
        
        const dateStart = new Date(this.dateInput.start);
        const dateEnd = new Date(this.dateInput.end);
        
        const timeDiff = dateEnd.getTime() - dateStart.getTime();
        let diff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        diff < 0 ? diff = diff*-1 : diff = diff;

        if (isNaN(diff)) {
            this.errorMsg.style.display = 'block';
        } else {
            this.diffOutput.innerHTML = `${diff} days difference`;
            this.errorMsg.style.display = 'none';
        }
    }

}

app.initialize();