# Ngx-Progress-Overlay

A simple, customizable donut progress bar with a full-screen overlay for Angular applications.

[![npm](https://img.shields.io/npm/v/ngx-progress-overlay.svg)](https://www.npmjs.com/package/ngx-progress-overlay)
[![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-progress-overlay.svg)](https://bundlephobia.com/result?p=ngx-progress-overlay)
[![License](https://img.shields.io/npm/l/ngx-progress-overlay.svg)](https://github.com/monkeyscript/ngx-progress-overlay/blob/main/LICENSE)

Demo: [https://monkeyscript.github.io/ngx-progress-overlay/](https://monkeyscript.github.io/ngx-progress-overlay/)

---

## Features

- 🍩 Clean SVG-based circular donut progress ring with percentage readout
- 🎨 Fully customizable colors (donut, value, text, and overlay backdrop)
- 📐 Adjustable donut stroke width
- 🚀 Standalone component support (Angular 16+) with backward-compatible `NgModule`
- 🛡️ Accessible (`role="progressbar"` with ARIA attributes)
- 🧹 Leak-free RxJS lifecycle management

---

## Installation

```bash
npm install ngx-progress-overlay
```

---

## Usage

### 1. Import Component or Module

**Standalone Components (Recommended):**
```typescript
import { Component } from '@angular/core';
import { NgxProgressOverlayComponent } from 'ngx-progress-overlay';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxProgressOverlayComponent],
  template: `<ngx-progress-overlay></ngx-progress-overlay>`
})
export class AppComponent {}
```

**NgModule-based Applications:**
```typescript
import { NgModule } from '@angular/core';
import { NgxProgressOverlayModule } from 'ngx-progress-overlay';

@NgModule({
  imports: [
    NgxProgressOverlayModule
  ]
})
export class AppModule { }
```

### 2. Control with `NgxProgressOverlayService`

Inject `NgxProgressOverlayService` into your component or service:

```typescript
import { Component, OnInit } from '@angular/core';
import { NgxProgressOverlayService } from 'ngx-progress-overlay';

@Component({
  selector: 'app-example',
  templateUrl: './app-example.component.html'
})
export class AppExampleComponent implements OnInit {

  constructor(private progressOverlay: NgxProgressOverlayService) { }

  startProgress() {
    // 1. Show overlay using a configuration object:
    this.progressOverlay.show({
      text: 'Uploading files...',
      color: '#ffd740',
      valueColor: 'white',
      textColor: 'lightslategray',
      donutWidth: 2,
      overlayColor: 'rgba(0,0,0,0.85)'
    });

    // Alternatively, using positional parameters:
    // this.progressOverlay.show('Uploading files...', '#ffd740', 'white', 'lightslategray', 2, 'rgba(0,0,0,0.85)');

    // 2. Update progress value (0 to 100):
    this.progressOverlay.setProgress(50);

    // 3. Hide overlay when done:
    this.progressOverlay.hide();
  }

}
```

### 3. Add Component Template

Place `<ngx-progress-overlay></ngx-progress-overlay>` in your root template (e.g. `app.component.html`):

```html
<ngx-progress-overlay></ngx-progress-overlay>
```

---

## API Reference

### `NgxProgressOverlayService`

| Method | Signature | Description |
| :--- | :--- | :--- |
| `show(config)` | `show(config: ProgressOverlayConfig): void` | Opens overlay with configuration object. |
| `show(...)` | `show(text?, color?, valueColor?, textColor?, donutWidth?, overlayColor?): void` | Opens overlay with positional parameters. |
| `setProgress(value)` | `setProgress(value: number): void` | Updates current progress value (0 - 100). |
| `hide()` | `hide(): void` | Hides the overlay and restores background. |

### `ProgressOverlayConfig`

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `string` | `''` | Text displayed underneath the progress number. |
| `color` | `string` | `'#c2185b'` | Color of the progress donut stroke (HEX / CSS color). |
| `valueColor` | `string` | `'white'` | Color of the progress percentage value text. |
| `textColor` | `string` | `'white'` | Color of the overlay subtitle text. |
| `donutWidth` | `number` | `1` | Stroke width of the donut progress bar. |
| `overlayColor` | `string` | `'rgba(0,0,0,0.8)'` | Background overlay backdrop color. |

---

## License

[Apache-2.0](https://github.com/monkeyscript/ngx-progress-overlay/blob/main/LICENSE) © [monkeyscript](https://github.com/monkeyscript)
