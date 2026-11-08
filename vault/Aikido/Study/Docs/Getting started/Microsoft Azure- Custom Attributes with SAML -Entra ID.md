---
title: "Microsoft Azure- Custom Attributes with SAML -Entra ID"
source: https://help.aikido.dev/getting-started/automated-user-management/saml-login/microsoft-azure-custom-attributes-with-saml-entra-id
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Microsoft Azure: Custom Attributes with SAML /Entra ID

First, make sure you have SAML login working using following guide:

[https://help.aikido.dev/doc/microsoft-azure-login-with-saml--entra-id/doc74BfKR60Z](https://help.aikido.dev/getting-started/automated-user-management/saml-login/microsoft-azure-login-with-saml-entra-id)

### Setting up Azure Group based SAML custom attributes <a href="#setting-up-azure-group-based-saml-custom-attributes" id="setting-up-azure-group-based-saml-custom-attributes"></a>

1.  Go to the application registration

    ![Azure portal view for managing Aikido-SSO enterprise application properties and settings.](https://help.aikido.dev/_assets/32836fc421b4/ucarecdn-62b626cc-9385-45bc-9fff-35344531e015.jpeg)
2.  Create an app role.**value** here should be the value of the claim. In this example, we're setting up for `aikido_role`, so valid values for this are `admin`, `default`, `team_only`.

    ![Creating a new app role "Aikido Admin" in Microsoft Azure for Aikido-SSO.](https://help.aikido.dev/_assets/39debdb6fcba/ucarecdn-88ff497f-e551-4c8e-8abb-445c5d69bf5a.jpeg)
3.  After saving, go back to the app settings, and add a group to 'Users and Groups'

    ![Azure portal: Assign users or groups to the Aikido-SSO enterprise application.](https://help.aikido.dev/_assets/5da896454d9b/ucarecdn-1e4e94af-0c14-4f6f-81a9-30c75166cf58.png)
4.  Add the Entra group you'd like to give admin access (in this case) and add the role we created in step 2.

    ![Azure Add Assignment: Select users, groups, and roles for directory permissions.](https://help.aikido.dev/_assets/9b90cda3f224/ucarecdn-8e32309f-84be-45d0-87d6-972bb1857a3a.png)
5.  Back in the Single Sign-on settings of the app, go to the Attributes & Claims -> Edit

    ![Azure portal SAML-based single sign-on configuration for Aikido-SSO application.](https://help.aikido.dev/_assets/c39728c7b211/ucarecdn-ffa0ee52-da46-4747-8542-2cddee420427.png)
6.  Click 'Add new claim'

    ![Azure portal Attributes & Claims page for adding and managing SAML claims.](https://help.aikido.dev/_assets/7e525d9c6ecb/ucarecdn-e7012a33-19d0-4a01-9a12-f17231dff1e4.png)
7.  Fill in the attribute name & user.assignedroles as source attribute. (this is the `admin` value we set up in step 2)

    ![Azure claim setup: mapping "aikido\_role" to "user.assignedroles" attribute.](https://help.aikido.dev/_assets/3a7287ca6d77/ucarecdn-02e6788a-d5d8-4bc8-b2c8-7f3371441391.png)
8. All done. On SAML login, these changes will take effect.
