const html = require('nanohtml')
const router = require('../../lib/router')
const render = require('../../render')

module.exports = ({ schema, collection, section }) => html`
  <aside class="span1 max16 p1 lh5">
    <div class="p05">
      <div class="p05">
        <ul>
          <li><a
            class="a-anchor a-ul ${!collection && !section && 'ul' || ''}"
            href="/"
          >Dashboard</a></li>
        </ul>
      </div>
      <div class="p05">
        <h2 class="fw500 color-black-40">Collections</h2>
        <ul>
          ${schema.collections.map(item => html`
            <li><a
              class="a-anchor a-ul ${item === collection && 'ul' || ''}"
              href="/${item.id}"
            >${item.name}</a></li>
          `)}
        </ul>
      </div>

      <div class="p05">
        <ul>
          <li><a
            class="a-anchor a-ul color-black-20"
            href="#"
            onclick=${e => {
              e.preventDefault()
              render()
            }}
          >rerender</a></li>
        </ul>
      </div>

    </div>
  </aside>
`
