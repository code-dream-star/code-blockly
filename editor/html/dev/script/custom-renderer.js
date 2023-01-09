CustomRenderer = function (name) {
     CustomRenderer.superClass_.constructor.call(this, name);
};
Blockly.utils.object.inherits(CustomRenderer, Blockly.blockRendering.Renderer);

CustomConstantsProvider = function () {
     // Set up all of the constants from the base provider.
     CustomConstantsProvider.superClass_.constructor.call(this);
     // Override a few properties.
     // The width of the notch used for previous and next connections.
     this.NOTCH_WIDTH = 40;
     // The height of the notch used for previous and next connections.
     this.NOTCH_HEIGHT = 0;
     // Rounded corner radius.
     this.CORNER_RADIUS = 10;
     // The height of the puzzle tab used for input and output connections.
     this.TAB_HEIGHT = 25;
     this.TAB_WIDTH = 0;
     this.JAGGED_TEETH_HEIGHT = 0;
     this.JAGGED_TEETH_WIDTH = 0;

     this.STATEMENT_INPUT_NOTCH_OFFSET = 20;
     this.NOTCH_OFFSET_LEFT = 15;
     this.STATEMENT_INPUT_PADDING_LEFT = 25;
     this.BETWEEN_STATEMENT_PADDING_Y = 4;
     this.MIN_BLOCK_HEIGHT = 20;
     this.FIELD_BORDER_RECT_X_PADDING = 5;
     this.FIELD_BORDER_RECT_Y_PADDING = 3;
     this.FIELD_BORDER_RECT_COLOUR = "#F5F9FF";
     this.EMPTY_INLINE_INPUT_PADDING = 17;
     this.EMPTY_INLINE_INPUT_HEIGHT = 25;
     this.EMPTY_STATEMENT_INPUT_HEIGHT = 27;
};

Blockly.utils.object.inherits(
     CustomConstantsProvider,
     Blockly.blockRendering.ConstantProvider
);

Blockly.blockRendering.ConstantProvider.prototype.init = function () {
     this.JAGGED_TEETH = this.makeJaggedTeeth();
     this.NOTCH = this.makeNotch();
     this.START_HAT = this.makeStartHat();
     this.PUZZLE_TAB = this.makePuzzleTab();
     this.INSIDE_CORNERS = this.makeInsideCorners();
     this.OUTSIDE_CORNERS = this.makeOutsideCorners();
};

Blockly.blockRendering.ConstantProvider.prototype.shapeFor = function (
     connection
) {
     switch (connection.type) {
          case Blockly.INPUT_VALUE:
          case Blockly.OUTPUT_VALUE:
               return this.PUZZLE_TAB;
          case Blockly.PREVIOUS_STATEMENT:
          case Blockly.NEXT_STATEMENT:
               return this.NOTCH;
          default:
               throw Error("Unknown connection type");
     }
};

Blockly.blockRendering.register("custom-renderer", CustomRenderer);
CustomRenderer.prototype.makeConstants_ = function () {
     return new CustomConstantsProvider();
};
