export class Joke {

  setup: string;
  punchline: string;
  hide: boolean;
  msgText: string;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
    this.msgText = 'Tell Me';
  }

  toggle() {
    this.hide = !this.hide;
    if (this.hide) {
      this.msgText = 'Tell me';
    } else {
      this.msgText = 'Hide this answer';
    }
  }
}
}
