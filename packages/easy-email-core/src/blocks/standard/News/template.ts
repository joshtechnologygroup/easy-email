export const MJML = `
  <mj-section padding="0px 16px" background-color="#F6F6F6" css-class="{{class}}">
    <mj-group css-class="container" background-color="#FFFFFF">
      <mj-column width="70%" padding="16px">
        <mj-text font-size="16px" line-height="24px" font-weight="700" color="#404040">{{title}}</mj-text>
        <mj-text font-size="14px" line-height="20px" color="#666666" font-weight="400">{{description}}...
          <a href="{{link}}" color="#0A71D1">more</a>
        </mj-text>
    </mj-column>
    {% if image %}
      <mj-column width="30%" padding="16px 16px 16px 0">
          <mj-hero
            mode="fixed-height"
            height="80px"
            background-color="#E9E9E9"
            background-url="{{image}}"
            border-radius="4px"
          ></mj-hero >
      </mj-column>
    {% endif %}
  </mj-group>
</mj-section>
`;
