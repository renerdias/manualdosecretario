<h1 id="divider-attributes"><a href="https://element-plus.org/#/en-US/component/divider">Divider Attributes</a></h1>
<table>
<thead>
    <tr>
    <th>Attribute</th>
    <th>Description</th>
    <th>Type</th>
    <th>Accepted Values</th>
    <th>Default</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>direction</td>
        <td>Set divider's direction</td>
        <td>string</td>
        <td>horizontal / vertical</td>
        <td>horizontal</td>
    </tr>
    <tr>
        <td>content-position</td>
        <td>customize the content on the divider line</td>
        <td>String</td>
        <td>left / right / center</td>
        <td>center</td>
    </tr>
</tbody>
</table>

## Example

### Horizonal

```html
<template>
  <div>
    <span>Divider simples.</span>
    <pg-divider></pg-divider>
    <span>Divider com conteudo posicionado no centro. Padrão.</span>
    <pg-divider><i class="pg-icon-star-on"></i></pg-divider>
    <span>Divider com conteudo posicionado à esquerda</span>
    <pg-divider content-position="left">Rabindranath Tagore</pg-divider>
    <span>Divider com conteudo posicionado à direita</span>
    <pg-divider content-position="right">Rabindranath Tagore</pg-divider>
  </div>
</template>
```

### Vertical

```html
<template>
  <div>
    <span>Rain</span>
    <pg-divider direction="vertical"></pg-divider>
    <span>Home</span>
    <pg-divider direction="vertical"></pg-divider>
    <span>Grass</span>
  </div>
</template>
```
