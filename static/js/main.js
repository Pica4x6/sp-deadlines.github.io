$(function() {
  deadlineByConf = {};

  
  
  
  var rawDeadlines = "2024-06-14 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-07-05 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-12-04 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-09-20 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2023-12-18 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-04-12 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-10-02 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2023-07-24 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2023 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2023').addClass('past');
    }
    $('#2023 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2023"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2024-06-06 23:59","2024-11-14 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2023-10-12 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2023-07-31 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2023 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2023').addClass('past');
    }
    $('#2023 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2023"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2023-11-02 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["%y-01-19 23:59","%y-04-29 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["%y-12-04 23:59","%y-06-14 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-08-15 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-06-30 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2024-08-20 23:59","2025-01-20 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["%y-06-06 23:59","%y-10-17 23:59","%y-02-08 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["%y-04-17 23:59","%y-07-10 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2024-01-08 23:59","2024-04-19 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-03-07 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-04-02 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["%y-05-31 23:59","%y-08-31 23:59","%y-11-30 23:59","%y-02-28 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "UTC-12");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2022-09-19" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2023 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2023').addClass('past');
    }
    $('#2023 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2023"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-09-04 18:00" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "KST");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["%y-02-03 23:59","%y-05-15 23:59","%y-09-30 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-04-09 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-05-28 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-05-15 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "UTC-12");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2024-09-09 23:59","2025-01-13 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-09-01 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-12-20" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-06-06 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2023-07-01 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2023 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2023').addClass('past');
    }
    $('#2023 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2023"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2024-02-02 23:59","2024-04-19 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2025-01-17 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2025 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2025').addClass('past');
    }
    $('#2025 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2025"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-03-13 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-07-01 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-05-18 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = ["2023-12-06 23:59","2024-02-21 23:59"] || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2023-06-23 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2023 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2023').addClass('past');
    }
    $('#2023 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2023"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2023-05-30 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2023 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2023').addClass('past');
    }
    $('#2023 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2023"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-03-01 13:00" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "CET");
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-06-30 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  
  
  
  var rawDeadlines = "2024-03-18 23:59" || [];
  if (rawDeadlines.constructor !== Array) {
    rawDeadlines = [rawDeadlines];
  }
  var parsedDeadlines = [];
  while (rawDeadlines.length > 0) {
    var rawDeadline = rawDeadlines.pop();
    // check if date is template
    if (rawDeadline.indexOf('%m') >= 0) {
      for (var m = 1; m <= 12; m++) {
        rawDeadlines.push(rawDeadline.replace('%m', m < 10 ? '0' + m : m));
      }
    } else if (rawDeadline.indexOf('%y') >= 0) {
      year = parseInt(moment().year());
      rawDeadlines.push(rawDeadline.replace('%y', year));
      rawDeadlines.push(rawDeadline.replace('%y', year + 1));

    } else {
      // adjust date according to deadline timezone
      
      var deadline = moment.tz(rawDeadline, "Etc/GMT+12"); // Anywhere on Earth
      

      // post-process date
      if (deadline.minutes() === 0) {
        deadline.subtract(1, 'seconds');
      }
      if (deadline.minutes() === 59) {
        deadline.seconds(59);
      }
      parsedDeadlines.push(deadline);
    }
  }

  // check which deadline is closest
  var confDeadline = parsedDeadlines[0];
  var today = moment();
  for (var i = 1; i < parsedDeadlines.length; i++) {
    deadlineCandidate = parsedDeadlines[i];
    if ((today.diff(deadlineCandidate) < 0 && today.diff(deadlineCandidate) > today.diff(confDeadline))) {
      confDeadline = deadlineCandidate;
    }
  }

  // render countdown timer
  if (confDeadline) {
    function make_update_countdown_fn(confDeadline) {
      return function(event) {
        diff = moment() - confDeadline
        if (diff <= 0) {
           $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
        } else {
          $(this).html(confDeadline.fromNow());
        }
      }
    }
    $('#2024 .timer').countdown(confDeadline.toDate(), make_update_countdown_fn(confDeadline));
    // check if date has passed, add 'past' class to it
    if (moment() - confDeadline > 0) {
      $('#2024').addClass('past');
    }
    $('#2024 .deadline-time').html(confDeadline.local().format('D MMM YYYY, h:mm:ss a'));
    deadlineByConf["2024"] = confDeadline;
  }
  
  

  // Reorder list
  confs = $('.conf');
  confs.detach().sort(function(a, b) {
    var today = moment();
    var a = deadlineByConf[a.id];
    var b = deadlineByConf[b.id];
    var diff1 = today.diff(a)
    var diff2 = today.diff(b)
    if (a == null && b == null) {
      return 0;
    }
    if (a == null && diff2 > 0) {
      return -1;
    }
    if (a == null && diff2 < 0) {
      return +1;
    }
    if (b == null && diff1 > 0) {
      return +1;
    }
    if (b == null && diff1 < 0) {
      return -1;
    }
    if (diff1 < 0 && diff2 > 0) {
      return -1;
    }
    if (diff1 > 0 && diff2 < 0) {
      return +1;
    }
    if (diff1 < 0 && diff2 < 0) {
      return -1 ? diff1 < diff2 : +1;
    }
    if (diff1 > 0 && diff2 > 0) {
      return -1 ? a < b : +1;
    }
  });
  $('.conf-container').append(confs);

  // Set checkboxes
  var conf_type_data = [{"name":"A*","sub":"AAA","esp":1},{"name":"A","sub":"A","esp":2},{"name":"B","sub":"B","esp":3},{"name":"C","sub":"C","esp":0},{"name":"N/A","sub":"N","esp":0}];
  var all_tags = [];
  var toggle_status = {};
  for (var i = 0; i < conf_type_data.length; i++) {
    all_tags[i] = conf_type_data[i]['tag'];
    toggle_status[all_tags[i]] = false;
  }
  var tags = store.get('');
  if (tags === undefined) {
    tags = all_tags;
  }
  for (var i = 0; i < tags.length; i++) {
    $('#' + tags[i] + '-checkbox').prop('checked', true);
    toggle_status[tags[i]] = true;
  }
  store.set('', tags);

  function update_conf_list() {
    confs.each(function(i, conf) {
      var conf = $(conf);
      var show = false;
      for (var i = 0; i < all_tags.length; i++) {
        if(conf.hasClass(all_tags[i])) {
          show = show | toggle_status[all_tags[i]];
        }
      }
      if (show) {
        conf.show();
      } else {
        conf.hide()
      }
    });
  }
  update_conf_list();

  // Event handler on checkbox change
  $('form :checkbox').change(function(e) {
    var checked = $(this).is(':checked');
    var tag = $(this).prop('id').slice(0, -9);
    toggle_status[tag] = checked;

    if (checked == true) {
      if (tags.indexOf(tag) < 0)
        tags.push(tag);
    }
    else {
      var idx = tags.indexOf(tag);
      if (idx >= 0)
        tags.splice(idx, 1);
    }
    store.set('', tags);
    update_conf_list();
  });
});
