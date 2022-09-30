export class Projects {
  id?: number;
  nombreP: string;
  descripcionP: string;
  demoP: string;
  repoP: string;
  urlimagenP: string;

  constructor(
    nombreP: string,
    descripcionP: string,
    demoP: string,
    repoP: string,
    urlimagenP: string
  ) {
    this.nombreP = nombreP;
    this.descripcionP = descripcionP;
    this.demoP = demoP;
    this.repoP = repoP;
    this.urlimagenP = urlimagenP;
  }
}
