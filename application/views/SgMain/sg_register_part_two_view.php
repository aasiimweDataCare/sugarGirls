<div class="col-sm-6 col-sm-offset-3 container-fluid custom-forms">
    <?php
    $attributes = array("class" => "", "id" => "sg_register_form_part_two", "name" => "sg_register_form_part_two");
    echo form_open("SgLogin/register_submit_part_two", $attributes);
    ?>

    <?= $this->session->flashdata('msg_sg_register_part_two'); ?>

    <h2 class="text-center">Complete your profile to get started!</h2>

    <h3 class="text-center">Add a few details about yourself to start chatting with travelers across the world.</h3>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Required</h3>
        </div>
        <div class="panel-body">
            <div class="form-group">
                <label for="ethnicity" class="control-label">Ethnicity</label>
                <?php
                $attributes = 'class = "form-control" name="ethnicity" id = "ethnicity" title="Ethnicity"';
                echo form_dropdown('ethnicity', $ethnicity, set_value('ethnicity'), $attributes);
                ?>
                <span class="text-danger">
                        <?= form_error('ethnicity'); ?>
                    </span>
            </div>

            <div class="form-group">
                <label for="body_type" class="control-label">Body Type</label>
                <?php
                $attributes = 'class = "form-control" name="body_type" id = "body_type" title="body type"';
                echo form_dropdown('body_type', $body_type, set_value('body_type'), $attributes);
                ?>
                <span class="text-danger">
                        <?= form_error('body_type'); ?>
                    </span>
            </div>

            <div class="form-group">
                <label for="relationship_status" class="control-label">Relationship Status</label>
                <?php
                $attributes = 'class = "form-control" name="relationship_status" id = "relationship_status" title="relationship status"';
                echo form_dropdown('relationship_status', $relationship_status, set_value('relationship_status'), $attributes);
                ?>
                <span class="text-danger">
                        <?= form_error('relationship_status'); ?>
                    </span>
            </div>

            <div class="form-group">
                <label for="country" class="control-label">Interested in traveling with</label>
                <?php
                $attributes = 'class = "form-control" name="travelling_with" id = "travelling_with" title="interested in travelling with"';
                echo form_dropdown('travelling_with', $travelling_with, set_value('travelling_with'), $attributes);
                ?>
                <span class="text-danger">
                        <?= form_error('travelling_with'); ?>
                    </span>
            </div>

            <div class="form-group">
                <label class="control-label">Looking For</label>

                <div class="row">
                    <div class="col-sm-2 col-sm-offset-2">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="looking_for[]" id="dating" value="dating"> Dating
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="looking_for[]" id="friendship" value="Friendship">
                                Friendship
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-2 col-sm-offset-2">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="looking_for[]" id="long_term_relationship"
                                       value="Long Term Relationship"> Long Term Relationship
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="looking_for[]" id="travel_partner" value="Travel Partner">
                                Travel Partner
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-2 col-sm-offset-2">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="looking_for[]" id="discreet_affair"
                                       value="Discreet Affair"> Discreet Affair
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="looking_for[]" id="casual_dating" value="Casual Dating">
                                Casual Dating
                            </label>
                        </div>
                    </div>
                </div>
            </div>


            <div class="form-group" id="locationField">
                <label for="location" class="control-label">Location</label>
                <input
                    id="autocomplete"
                    name="location"
                    class="form-control"
                    placeholder="Enter your address"
                    onFocus="geolocate()"
                    type="text">
                <span class="text-danger"><?= form_error('location'); ?></span>
                <input class="field" id="street_number" name="" disabled="true" hidden="hidden">
                <input class="field" id="route" name="route" disabled="true" hidden="hidden">
                <input class="field" id="locality" name="locality" disabled="true" hidden="hidden">
                <input class="field" id="administrative_area_level_1" name="admin_level_one" disabled="true"
                       hidden="hidden">
                <input class="field" id="postal_code" name="postal_code" disabled="true" hidden="hidden">
                <input class="field" id="country" name="country" disabled="true" hidden="hidden">

            </div>
            <script>
                // This example displays an address form, using the autocomplete feature
                // of the Google Places API to help users fill in the information.

                // This example requires the Places library. Include the libraries=places
                // parameter when you first load the API. For example:
                // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

                var placeSearch, autocomplete;
                var componentForm = {
                    street_number: 'short_name',
                    route: 'long_name',
                    locality: 'long_name',
                    administrative_area_level_1: 'short_name',
                    country: 'long_name',
                    postal_code: 'short_name'
                };

                function initAutocomplete() {
                    // Create the autocomplete object, restricting the search to geographical
                    // location types.
                    autocomplete = new google.maps.places.Autocomplete(
                        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
                        {types: ['geocode']});

                    // When the user selects an address from the dropdown, populate the address
                    // fields in the form.
                    autocomplete.addListener('place_changed', fillInAddress);
                }

                function fillInAddress() {
                    // Get the place details from the autocomplete object.
                    var place = autocomplete.getPlace();

                    for (var component in componentForm) {
                        document.getElementById(component).value = '';
                        document.getElementById(component).disabled = false;
                    }

                    // Get each component of the address from the place details
                    // and fill the corresponding field on the form.
                    for (var i = 0; i < place.address_components.length; i++) {
                        var addressType = place.address_components[i].types[0];
                        if (componentForm[addressType]) {
                            var val = place.address_components[i][componentForm[addressType]];
                            document.getElementById(addressType).value = val;
                        }
                    }
                }

                // Bias the autocomplete object to the user's geographical location,
                // as supplied by the browser's 'navigator.geolocation' object.
                function geolocate() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function (position) {
                            var geolocation = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            };
                            var circle = new google.maps.Circle({
                                center: geolocation,
                                radius: position.coords.accuracy
                            });
                            autocomplete.setBounds(circle.getBounds());
                        });
                    }
                }
            </script>
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMFx39NK5e5phZUUEaDyIlgevM0_Nhv2A&libraries=places&callback=initAutocomplete"
                async defer>
            </script>

        </div>
    </div>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Optional</h3>
        </div>
        <div class="panel-body">
            Panel content
        </div>
    </div>

    <input type="submit" name="register_user" id="register_user" value="Create Account"
           class="btn btn-success custom-submit-btn"/>
    <br/>
    <?= form_close(); ?>
    <?= $this->session->flashdata('msg_sg_register'); ?>
    <p class="footer">Please <a href="#" data-toggle="modal" data-target="#loginModal">Log
            In</a> if you already have an account</p>

</div>
<div class="clearfix"></div>
