export class FormUtils {
  static isInvalid(control: any) {
    return control.invalid && control.touched;
  }

  static showError(control: any, error: string) {
    return control?.errors?.[error] && control.touched;
  }
}