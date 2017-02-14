<div class="col-sm-6 col-sm-offset-3 container-fluid custom-forms">
    <?php
    $attributes = array("class" => "", "id" => "sg_register_form_part_two", "name" => "sg_register_form_part_two");
    echo form_open("SgHome/register_submit_part_two", $attributes);
    ?>

    <?= $this->session->flashdata('msg_sg_register'); ?>
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
                <label for="travelling_with" class="control-label">Interested in traveling with</label>
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

            <div class="form-group">
                <label for="self_description" class="control-label">Describe your self</label>
                <textarea placeholder="Describe your self.." class="form-control"
                          id="self_description"
                          name="self_description"
                          cols="60" rows="5"><?php echo set_value('self_description'); ?></textarea>
                <span class="text-danger"><?= form_error('self_description'); ?></span>
            </div>
        </div>
    </div>
    <div class="clearfix"></div>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Optional</h3>
        </div>
        <div class="panel-body">
            <div class="form-group">
                <label for="height" class="control-label">Height</label>
                <?php
                $attributes = 'class = "form-control" name="height" id = "height" title="Height"';
                echo form_dropdown('height', $height, set_value('height'), $attributes);
                ?>
                <span class="text-danger">
                        <?= form_error('height'); ?>
                    </span>
            </div>

            <div class="form-group">
                <label for="education" class="control-label">Education</label>
                <?php
                $attributes = 'class = "form-control" name="education" id = "education" title=Education"';
                echo form_dropdown('education', $education, set_value('education'), $attributes);
                ?>
                <span class="text-danger">
                        <?= form_error('education'); ?>
                    </span>
            </div>

            <div class="form-group">
                <label for="religion" class="control-label">Religion</label>
                <?php
                $attributes = 'class = "form-control" name="religion" id = "religion" title="Religion"';
                echo form_dropdown('religion', $religion, set_value('religion'), $attributes);
                ?>
                <span class="text-danger">
                        <?= form_error('religion'); ?>
                    </span>
            </div>

            <div class="form-group">
                <label for="children" class="control-label">Children</label>
                <?php
                $attributes = 'class = "form-control" name="children" id = "children" title="Children"';
                echo form_dropdown('children', $children, set_value('children'), $attributes);
                ?>
                <span class="text-danger">
                        <?= form_error('children'); ?>
                    </span>
            </div>

            <div class="form-group">
                <label for="smoking" class="control-label">Smoking</label>
                <?php
                $attributes = 'class = "form-control" name="smoking" id = "smoking" title="Smoking Habit"';
                echo form_dropdown('smoking', $smoking, set_value('smoking'), $attributes);
                ?>
                <span class="text-danger">
                        <?= form_error('smoking'); ?>
                    </span>
            </div>

            <div class="form-group">
                <label for="drinking" class="control-label">Drinking</label>
                <?php
                $attributes = 'class = "form-control" name="drinking" id = "drinking" title="Drinking Habit"';
                echo form_dropdown('drinking', $drinking, set_value('drinking'), $attributes);
                ?>
                <span class="text-danger">
                        <?= form_error('drinking'); ?>
                    </span>
            </div>

            <div class="form-group">
                <label for="why_travel" class="control-label">Why I want to Travel</label>
                <textarea placeholder="Why You want to Travel..." class="form-control"
                          id="why_travel"
                          name="why_travel"
                          cols="60" rows="5"><?php echo set_value('why_travel'); ?></textarea>
                <span class="text-danger"><?= form_error('why_travel'); ?></span>
            </div>

        </div>
    </div>

    <input type="submit" name="register_user" id="register_user" value="Save Profile"
           class="btn btn-success custom-submit-btn"/>
    <br/>
    <?= form_close(); ?>
    <?= $this->session->flashdata('msg_sg_register_part_two'); ?>
    <p class="footer">Please
        <a href="#" data-toggle="modal" data-target="#loginModal">Log In</a>
        if you already have an account
    </p>
</div>
<div class="clearfix"></div>
