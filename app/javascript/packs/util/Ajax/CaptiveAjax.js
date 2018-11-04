import $ from "jquery";

import { getStore } from "../../Store";
import { setError } from "../../actions";

function getUrl(action) {
  return `/games/${getStore().getState().gameInfo.id}/captive/${action}`;
}

function ajax({ url, method = "POST", data = {}, success, error }) {
  let csrfParam = $("meta[name='csrf-param']").attr("content");
  let csrfToken = $("meta[name='csrf-token']").attr("content");

  $.ajax({
    url,
    method,
    data: {
      ...data,
      [csrfParam]: csrfToken
    },
    dataType: "json",
    success: (data, textStatus, jqxhr) => {
      if (success) {
        success(data, textStatus, jqxhr);
      }
    },
    error: (jqxhr, textStatus, errorThrown) => {
      if (error) {
        if (error(jqxhr, textStatus, errorThrown) === true) {
          return;
        }
      }

      if (getStore().getState().gameInfo.debug) {
        console.log(`An error occurred from ajax call to [${method}] ${url}: ${textStatus}, ${errorThrown}`);
      }

      getStore().dispatch(setError("Oops! An error occurred! Please reload and try again."));
    }
  });
}

export default {
  increasePlayerAttribute: (attribute) => {
    ajax({
      url: getUrl("increase_player_attribute"),
      data: { attribute }
    });
  },

  decreasePlayerAttribute: (attribute) => {
    ajax({
      url: getUrl("decrease_player_attribute"),
      data: { attribute }
    });
  }
};
