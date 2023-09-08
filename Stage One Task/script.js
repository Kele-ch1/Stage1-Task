const currentUTCtime = document.querySelector('[data-testid="currentUTCtime"]');
        const currentTimeInMilliseconds = Date.now();
        const currentDate = new Date(currentTimeInMilliseconds);

        currentUTCtime.textContent = `${currentTimeInMilliseconds} ms - ${currentDate.toUTCString()}`;
